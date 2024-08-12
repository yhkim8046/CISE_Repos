import { FormEvent, useState } from "react";
import axios from "axios";  
import formStyles from "../../styles/Form.module.scss";

const NewDiscussion = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");  
  const [source, setSource] = useState("");
  const [pubyear, setPubyear] = useState<string>("");  
  const [doi, setDoi] = useState("");
  const [claim, setClaim] = useState("");  
  const [evidence, setEvidence] = useState("");  

  const submitNewArticle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newArticle = {
      title,
      author,
      source,
      pubyear,  
      doi,
      claim,  
      evidence  
    };

    try {
      const response = await axios.post('http://localhost:8082/api/articles/', newArticle);
      console.log('Article added successfully:', response.data);
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  return (
    <div className="container">
      <h1>New Article</h1>
      <form className={formStyles.form} onSubmit={submitNewArticle}>
        <label htmlFor="title">Title:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <label htmlFor="author">Author:</label> {/* 필드명 수정 */}
        <input
          type="text"
          name="author"
          value={author}  // 배열이 아닌 단일 문자열로 처리
          onChange={(event) => setAuthor(event.target.value)}
          className={formStyles.formItem}
        />

        <label htmlFor="source">Source:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="source"
          id="source"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
          }}
        />

        <label htmlFor="pubyear">Publication Year:</label> {/* 필드명 수정 */}
        <input
          className={formStyles.formItem}
          type="text"  // 문자열로 처리
          name="pubYear"
          id="pubYear"
          value={pubyear}
          onChange={(event) => setPubyear(event.target.value)}  // 문자열로 처리
        />

        <label htmlFor="doi">DOI:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="doi"
          id="doi"
          value={doi}
          onChange={(event) => {
            setDoi(event.target.value);
          }}
        />

        <label htmlFor="claim">Claim:</label> {/* 추가된 필드 */}
        <input
          className={formStyles.formItem}
          type="text"
          name="claim"
          id="claim"
          value={claim}
          onChange={(event) => {
            setClaim(event.target.value);
          }}
        />

        <label htmlFor="evidence">Evidence:</label> {/* 추가된 필드 */}
        <textarea
          className={formStyles.formTextArea}
          name="evidence"
          value={evidence}
          onChange={(event) => setEvidence(event.target.value)}
        />

        <button className={formStyles.formItem} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewDiscussion;
