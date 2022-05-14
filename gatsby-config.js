module.exports = {
  plugins: [
    {
      resolve:`gatsy-source-filesystem`,
      options:{
        name:`pages`,
        path:`${__dirname}/src/pages`
      },
    },
    {
      resolve:`gatsy-source-filesystem`,
      options:{
        name:`posts`,
        path:`${__dirname}/src/posts`
      },
    },
    {
      resolve:`gatsy-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images`
      },
    },
  ],
  
}
