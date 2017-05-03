import { modal } from './modal'
import html from './index.html'

global.onOpen = () => {
  const doc = SpreadsheetApp.getActiveSpreadsheet()
  const menu = [
    { name: 'Show html', functionName: 'modalHtml' }
  ]
  doc.addMenu('My menu', menu)
}

global.modalHtml = () => {
  const doc = SpreadsheetApp.getActiveSpreadsheet()
  modal(doc, html, {
    title: 'A test Page.',
    message: 'これはテストページです'
  })
}
