import React from "react";
import Header from "../../Components/Header/Header";
import img3 from "../../Assets/img3.svg";
import BlogCard from "../../Components/BlogPageCard/BlogCard";

function Blog({ isDarkMode }) {
  const BlogData = [
    {
      title: "5 Basic Linux Command You Should Know",
      discription:
        "if you are using Linux operating system these Linux command you should definitely know which will boost your productivity in Linux soo.. Let's get started....",
      BlogLink:
        "https://dev.to/gkumarpandey/5-basic-linux-command-you-should-know-7oo",
    },
    {
      title: "What is Npm",
      discription:
        "Npm stands for Node package manager. npm is a package manager for the JavaScript programming language. it is default package manager for the JavaScript runtime environment Node.js....",
      BlogLink: "https://dev.to/gkumarpandey/what-is-npm-2ifh",
    },
  ];
  return (
    <div className="blog-page">
      <Header img={img3} />
      <div
        style={{
          fontSize: "1.9rem",
          textAlign: "center",
          color: isDarkMode ? "#00ffab" : "Black",
          padding: '10px'
        }}
      >
        <h2>My Blogs</h2>
      </div>
      {BlogData.map((item, idx) => {
        return (
          <BlogCard
            title={item.title}
            discription={item.discription}
            BlogLink={item.BlogLink}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default Blog;
