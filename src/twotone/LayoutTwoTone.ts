// This icon file is generated by build/generateIcons.ts
// tslint:disable

import { IconDefinitionGetter } from '../types';
const temp: any = function LayoutTwoTone(
  primaryColor: string,
  secondaryColor: string
) {
  return {
    name: 'layout',
    theme: 'twotone',
    nameWithTheme: 'layout-twotone',
    tag: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'icon',
      viewBox: '0 0 1024 1024'
    },
    children: [
      {
        tag: 'path',
        attrs: {
          fill: secondaryColor,
          d:
            'M384 185h456v136H384zm-200 0h136v656H184zm696-73H144c-17.7 0-32 14.3-32 32v1c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v-1c0-17.7-14.3-32-32-32zM384 385h456v456H384z'
        },
        children: []
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M880 113H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V145c0-17.7-14.3-32-32-32zM320 841H184V185h136v656zm520 0H384V385h456v456zm0-520H384V185h456v136z',
          fill: primaryColor
        },
        children: []
      }
    ]
  };
};
temp.nameWithTheme = 'layout-twotone';
const LayoutTwoTone: IconDefinitionGetter = temp;
export default LayoutTwoTone;