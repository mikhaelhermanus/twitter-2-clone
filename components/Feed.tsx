import React from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from '../components/Tweet'

interface Props {
    tweets: Tweet[]
}

const dummyTweets = [
    {
        _id : 1,
        profileImg :'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
        username : 'DummyUsername',
        _createdAt : '29-03-2022',
        _updatedAt: '29-03-2022',
        blockTweet : false,
        _rev: 'string',
        _type: 'tweet',
        text : 'this is a dummy tweet',
        image : 'https://podiumnews.com/mjprint/podium/podiumnews_twitter.jpg'
    }
]


function Feed({ tweets }: Props) {
    return (
        <div className='col-span-7 lg:col-span-5 border-x'>
            <div className='flex items-center justify-between'>
                <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
                <RefreshIcon className='mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-200 ease-out hover:rotate-180 active:scale-125' />
            </div>
            <div>
                <TweetBox />
            </div>
            <div>
                {
                    dummyTweets.map(tweet => (
                        <TweetComponent key={tweet._id} tweet={tweet} />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed