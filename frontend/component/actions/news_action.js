import { fetchAllNews, fetchNews } from "../util/news_api_util"

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS'

const receiveNews = (news) => ({
    type: RECEIVE_NEWS,
    news
})

const receiveAllNews = (news) => ({
    type: RECEIVE_ALL_NEWS,
    news
})

export const getNews = (name) => (dispatch) => (
    fetchNews(name)
        .then( (res) => dispatch(receiveNews(res)))
)

export const getAllNews = () => (dispatch) => (
    fetchAllNews()
        .then( (res) =>  {
            console.log(res)
            dispatch(receiveAllNews(res)) })
)