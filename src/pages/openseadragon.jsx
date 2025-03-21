// openseadragon page
import React from "react"
import Layout from "../components/layout"
import OpenSeadragon from "openseadragon"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

function Blog({ posts }) {
  // Render posts...
}

// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts,
    },
  }
}

export default Blog