// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import remark from "remark";
// import html from "remark-html";

// const postsDirectory = path.join(process.cwd(), "contents");

// export function getSortedPostsData() {
//   const directory = path.join(process.cwd(), `contents/books`);

//   const fileNames = fs.readdirSync(directory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, "");

//     // Read markdown file as string
//     const fullPath = path.join(`contents/books`, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });

//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }
// // export function getSortedPostsData() {
// //   // Get file names under /posts
// //   const postTypes = fs.readdirSync(postsDirectory);
// //   const folders = postTypes.map((type) => {
// //     const directory = path.join(process.cwd(), `contents/${type}`);

// //     const fileNames = fs.readdirSync(directory);

// //     const allPostsData = fileNames.map((fileName) => {
// //       // Remove ".md" from file name to get id
// //       const id = fileName.replace(/\.md$/, "");

// //       // Read markdown file as string
// //       const fullPath = path.join(`contents/${type}`, fileName);
// //       const fileContents = fs.readFileSync(fullPath, "utf8");

// //       // Use gray-matter to parse the post metadata section
// //       const matterResult = matter(fileContents);

// //       // Combine the data with the id
// //       return {
// //         id,
// //         ...matterResult.data,
// //       };
// //     });

// //     // Sort posts by date
// //     return allPostsData.sort((a, b) => {
// //       if (a.date < b.date) {
// //         return 1;
// //       } else {
// //         return -1;
// //       }
// //     });
// //   });
// // }

// export function getAllPostIds() {
//   const myDirectory = path.join(process.cwd(), `contents/books`);
//   const fileNames = fs.readdirSync(myDirectory);

//   // Returns an array that looks like this:
//   // [
//   //   {
//   //     params: {
//   //       id: 'ssg-ssr'
//   //     }
//   //   },
//   //   {
//   //     params: {
//   //       id: 'pre-rendering'
//   //     }
//   //   }
//   // ]
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// export async function getPostData(id) {
//   const myDirectory = path.join(process.cwd(), `contents/books`);

//   const fullPath = path.join(myDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }
