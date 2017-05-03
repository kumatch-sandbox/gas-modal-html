
export const modal = (doc, html, params) => {
  const t = HtmlService.createTemplate(html)
  Object.assign(t, params)
  doc.show(t.evaluate())
}
