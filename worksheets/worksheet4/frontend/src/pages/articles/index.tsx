import React, { useEffect, useState } from "react";
import axios from "axios";
import SortableTable from "@/components/table/SortableTable";

interface ArticlesInterface {
  id: string;
  title: string;
  author: string;
  source: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<ArticlesInterface[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/articles/')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const headers: { key: keyof ArticlesInterface; label: string }[] = [
    { key: "title", label: "Title" },
    { key: "author", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "claim", label: "Claim" },
    { key: "evidence", label: "Evidence" },
  ];

  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>
      <SortableTable headers={headers} data={articles} />
    </div>
  );
};

export default Articles;
