import * as React from 'react'
import PageTemplate from './PageTemplate'
import * as renderer from 'react-test-renderer'

const HeaderMock = () => (<React.Fragment>Header</React.Fragment>)
const FooterMock = () => (<React.Fragment>Footer</React.Fragment>)
const ContentMock = () => (<React.Fragment>Content</React.Fragment>)

describe('PageTemplate', () => {
  test('shows Header, Footer, and children', () => {
    const component = renderer.create(
      <PageTemplate header={<HeaderMock />} footer={<FooterMock />}>
        <ContentMock />
      </PageTemplate>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
