import * as React from 'react'
import ArticleStore from '../types/ArticleStore'

const initialArticles:ArticleStore[] = []

const ArticlesContext = React.createContext<ArticleStore[]>(initialArticles)

export default ArticlesContext
