import { loremIpsum } from "lorem-ipsum";
import randomDate from "random-datetime";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import { Picsum } from "picsum-photos";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const genMessages = async () => {
  const messages = [];
  for (let i = 0; i < 20; i++) {
    const title = loremIpsum({ units: "words", count: 3 });
    const description = loremIpsum({ units: "sentences" });
    const article = loremIpsum({ units: "paragraphs" });
    messages.push({
      id: uuidv4(),
      title,
      description,
      article,
      timestamp: moment(randomDate({ year: 2004 + getRandomInt(16) })).format(
        "YYYY-MM-DD"
      ),
    });
  }

  return messages;
};

export const genComments = async () => {
  const comments = [];

  for (let i = 0; i < getRandomInt(10); i++) {
    const name = loremIpsum({ units: "words", count: 2 });
    // const image = await Picsum.random();
    const content = loremIpsum({ units: "paragraphs" });
    const comment = {
      id: uuidv4(),
      name,
      picture: Picsum.url(),
      timestamp: moment(randomDate({ year: 2004 + getRandomInt(16) })).format(
        "YYYY-MM-DD hh:mm:ss"
      ),
      replies: [],
      content,
    };
    comments.push(comment);
    for (let j = 0; j < getRandomInt(10); j++) {
      const name = loremIpsum({ units: "words", count: 2 });
      // const image = await Picsum.random();
      const content = loremIpsum({ units: "paragraphs" });
      const reply = {
        id: uuidv4(),
        name,
        picture: Picsum.url(),
        content,
        timestamp: moment(
          randomDate({ year: moment(comment.timestamp).year() })
        ).format("YYYY-MM-DD hh:mm:ss"),
      };
      comment.replies.push(reply);
    }
  }

  return comments;
};
