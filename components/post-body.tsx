import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
type Props = {
	content: string;
};

const md:any = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                     hljs.highlight(lang, str, true).value +
                     '</code></pre>';
            } catch (err) {console.log(err)}
          }
      
          return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
      });

const PostBody = ({ content }: Props) => {
	return (
		<div className="prose dark:prose-invert px-4 md:px-0 max-w-4xl mx-auto">
			<div dangerouslySetInnerHTML={{ __html: md.render(content)}} />
		</div>
	);
};

export default PostBody;
//className={markdownStyles['markdown']}