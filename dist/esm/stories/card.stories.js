import * as React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
import Lorem from 'react-lorem-ipsum';
import faker from 'faker';
import { Card, FlipCard, Button, FlipCardTrigger } from '../';
export default {
  title: 'Components/Card',
  component: Card
};
export var Basic = () => {
  return /*#__PURE__*/React.createElement(Card, {
    content: {
      header: /*#__PURE__*/React.createElement(Heading, null, "Heading"),
      body: /*#__PURE__*/React.createElement(Lorem, {
        p: 4
      }),
      footer: /*#__PURE__*/React.createElement(Button, null, "klick me")
    }
  });
};
export var Flip = () => {
  return /*#__PURE__*/React.createElement(FlipCard, {
    front: /*#__PURE__*/React.createElement(Card, {
      content: {
        header: /*#__PURE__*/React.createElement(Heading, null, "Front"),
        body: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Lorem, {
          p: 2
        }), /*#__PURE__*/React.createElement(Button, null, "Some button")),
        footer: /*#__PURE__*/React.createElement(FlipCardTrigger, null, /*#__PURE__*/React.createElement(Button, null, "Flip"))
      }
    }),
    back: /*#__PURE__*/React.createElement(Card, {
      content: {
        header: /*#__PURE__*/React.createElement(Heading, null, "Back"),
        body: /*#__PURE__*/React.createElement(Lorem, {
          p: 2
        }),
        footer: /*#__PURE__*/React.createElement(FlipCardTrigger, null, /*#__PURE__*/React.createElement(Button, null, "Flip"))
      }
    })
  });
};

var CustomCardFront = () => /*#__PURE__*/React.createElement(Box, {
  border: "1px solid #ccc",
  width: 375,
  height: 411,
  overflow: "hidden",
  borderRadius: 10
}, /*#__PURE__*/React.createElement(Box, {
  h: 0,
  pt: "56.25%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  d: "block",
  background: "url(".concat(faker.image.abstract(375, 200), ")")
}), /*#__PURE__*/React.createElement(Heading, {
  p: 2
}, "Something"), /*#__PURE__*/React.createElement(FlipCardTrigger, null, /*#__PURE__*/React.createElement(Button, {
  size: "lg",
  display: "block",
  m: "2rem auto"
}, "Flip")));

var CustomCardBack = () => /*#__PURE__*/React.createElement(FlipCardTrigger, null, /*#__PURE__*/React.createElement(Box, {
  border: "1px solid #ccc",
  backgroundColor: "orange",
  width: 375,
  height: 411,
  overflow: "hidden",
  borderRadius: 10
}, /*#__PURE__*/React.createElement(Heading, {
  p: 2
}, "Something"), /*#__PURE__*/React.createElement(Text, {
  p: 2
}, "Something")));

export var FlipWithCustomContent = () => {
  return /*#__PURE__*/React.createElement(FlipCard, {
    front: /*#__PURE__*/React.createElement(CustomCardFront, null),
    back: /*#__PURE__*/React.createElement(CustomCardBack, null)
  });
};
//# sourceMappingURL=card.stories.js.map