import { InferGetStaticPropsType } from 'next'
import { Blocks } from '../components/blocks-renderer'
import { useTina } from 'tinacms/dist/react'
import { Layout } from '../components/layout'
import React from 'react'
import client from '.tina/__generated__/client'

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina(props)

  return (
    <Layout rawData={data} data={data.global }>
      <Blocks {...data.page} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.page({
    relativePath: `${params.filename.length>3?params.filename:'home'}.md`,
  })
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  }
}

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pageConnection()
  return {
    paths: pagesListData.data.pageConnection.edges.map((page) => ({
      params: { filename: page.node._sys.filename },
    })),
    fallback: false,
  }
}
