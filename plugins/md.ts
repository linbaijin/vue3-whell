import marked from 'marked'

const compileMdToJs = (str: string) => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

//https://cn.vitejs.dev/guide/api-plugin.html#transforming-custom-file-types
export function md() {
  return {
    name: 'md-compiler',
    transform(src, id) {
      return {
        code: id.endsWith('.md') ? compileMdToJs(src) : src,
        map: null, // 如果可行将提供 source map
      }
    },
  }
}
