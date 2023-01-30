export default postMessage({
  name: 'posts',
  types: schemaTypes.concat({
    title: 'Постууд',
    name: 'post',
    type: 'document',
    fields: [{title: 'Постын гарчиг', name: 'title', type: 'string'}],
  }),
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
