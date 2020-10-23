import { loremIpsum } from "lorem-ipsum";
import randomDate from "random-datetime";
import moment from "moment";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const genMessages = () => {
  const messages = [];
  for (let i = 0; i < 20; i++) {
    const title = loremIpsum({ units: "words", count: 3 });
    const description = loremIpsum({ units: "sentences" });
    const article = loremIpsum({ units: "paragraphs" });
    messages.push({
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
