
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // backgrounds: {
  //   values: [
  //        { name: 'red', value: '#f00', },
  //        { name: 'green', value: '#0f0', },
  //   ],
  // },
}

// export const decorators = [(Story) => ({
//   ...Story(),
//   template: `<div class="my-wrapping-class">${Story()}</div>`
// })];


// export const decorators = [(Story) => (console.log(Story()))];
