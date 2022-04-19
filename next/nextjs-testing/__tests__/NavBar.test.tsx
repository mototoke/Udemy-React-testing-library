import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import "setimmediate"
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()

describe('Navigation by Link', () => { 
    it('Should route to selected page in navbar', async () => {
        const { page } = await getPage({
            route: '/index',
        })
        // renderシミュレーション
        render(page)
        // クリックイベントを実行(BlogPageに遷移)
        userEvent.click(screen.getByTestId('blog-nav'))
        expect(await screen.findByText('blog page')).toBeInTheDocument()
        // screen.debug()

        // クリックイベントを実行(CommentPageに遷移)
        userEvent.click(screen.getByTestId('comment-nav'))
        expect(await screen.findByText('comment page')).toBeInTheDocument()

        // クリックイベントを実行(ContextPageに遷移)
        userEvent.click(screen.getByTestId('context-nav'))
        expect(await screen.findByText('context page')).toBeInTheDocument()
        
        // クリックイベントを実行(TodosPageに遷移)
        userEvent.click(screen.getByTestId('task-nav'))
        expect(await screen.findByText('todos page')).toBeInTheDocument()
        
        // クリックイベントを実行(HomePageに遷移)
        userEvent.click(screen.getByTestId('home-nav'))
        expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument()
    })
 })