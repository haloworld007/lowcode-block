import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SeadaBlockMeta: IPublicTypeComponentMetadata = {
  componentName: 'SeadaBlock',
  title: 'SeadaBlock',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@seada/block',
    version: '0.1.0',
    exportName: 'default',
    main: '',
    destructuring: false,
    subName: '',
  },
  configure: {
    // "props": [
    //   {
    //     "title": {
    //       "label": {
    //         "type": "i18n",
    //         "en-US": "ref",
    //         "zh-CN": "ref"
    //       }
    //     },
    //     "name": "ref",
    //     "setter": {
    //       "componentName": "MixedSetter",
    //       "props": {
    //         "setters": [
    //           {
    //             "componentName": "FunctionSetter"
    //           },
    //           {
    //             "componentName": "ObjectSetter",
    //             "props": {
    //               "config": {
    //                 "extraSetter": {
    //                   "componentName": "MixedSetter",
    //                   "isRequired": false,
    //                   "props": {}
    //                 }
    //               }
    //             },
    //             "isRequired": false,
    //             "initialValue": {}
    //           }
    //         ]
    //       }
    //     }
    //   },
    //   {
    //     "title": {
    //       "label": {
    //         "type": "i18n",
    //         "en-US": "key",
    //         "zh-CN": "key"
    //       }
    //     },
    //     "name": "key",
    //     "setter": {
    //       "componentName": "MixedSetter",
    //       "props": {
    //         "setters": [
    //           {
    //             "componentName": "StringSetter",
    //             "isRequired": false,
    //             "initialValue": ""
    //           },
    //           {
    //             "componentName": "NumberSetter",
    //             "isRequired": false,
    //             "initialValue": 0
    //           }
    //         ]
    //       }
    //     }
    //   }
    // ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'SeadaBlock',
    screenshot: '',
    schema: {
      componentName: 'SeadaBlock',
      props: {},
    },
  },
];

export default {
  ...SeadaBlockMeta,
  snippets,
};
