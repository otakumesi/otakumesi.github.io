const extractTextFromHTML= (html:string):string => {
  let span = document.createElement('span')
  span.innerHTML = html
  return span.textContent || span.innerText
}
export default extractTextFromHTML
