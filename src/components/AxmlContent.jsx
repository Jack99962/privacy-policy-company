function convertAxmlToHtml(axmlText) {
  return axmlText
    .replace(/<scroll-view[^>]*>/g, '<div class="content">')
    .replace(/<\/scroll-view>/g, "</div>")
    .replace(/<view([^>]*)>/g, "<div$1>")
    .replace(/<\/view>/g, "</div>")
    .replace(/<text([^>]*)>/g, "<p$1>")
    .replace(/<\/text>/g, "</p>")
    .replace(/<ant-button([^>]*)>/g, "<button$1>")
    .replace(/<\/ant-button>/g, "</button>")
    .replace(/onTap=/g, "data-on-tap=");
}

export default function AxmlContent({ source }) {
  const html = convertAxmlToHtml(source);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
