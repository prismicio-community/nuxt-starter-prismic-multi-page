import type { VueRichTextSerializer } from "@prismicio/vue";

import Heading1 from "./Heading1.vue";
import Heading2 from "./Heading2.vue";
import Heading3 from "./Heading3.vue";
import Paragraph from "./Paragraph.vue";
import OList from "./OList.vue";
import OListItem from "./OListItem.vue";
import List from "./List.vue";
import ListItem from "./ListItem.vue";
import Preformatted from "./Preformatted.vue";
import Strong from "./Strong.vue";
import Hyperlink from "./Hyperlink.vue";

const components: VueRichTextSerializer = {
  heading1: Heading1,
  heading2: Heading2,
  heading3: Heading3,
  paragraph: Paragraph,
  oList: OList,
  oListItem: OListItem,
  list: List,
  listItem: ListItem,
  preformatted: Preformatted,
  strong: Strong,
  hyperlink: Hyperlink,
};

export default components;
