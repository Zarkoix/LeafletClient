import React from 'react'
import { LeafletPage } from 'routes/Leaflet/components/LeafletNav/LeafletPage.js'
import { shallow } from 'enzyme'

describe('(Component) LeafletPage', () => {
  const props = { title: '10.3.1 Molecular Dynamics', isFavorited: false, isSelected: false }
  const t = true

  let _component
  beforeEach(() => {
    _component = shallow(
      <LeafletPage title={props.title} isFavorited={props.isFavorited} isSelected={props.isSelected} />
    )
  })

  it('Should renders the title', () => {
    const title = _component.find('.leafletPageTitle')
    expect(title).to.exist
    expect(title.text()).to.match(/10\.3\.1 Molecular Dynamics/)
  })

  it('Should only shows heart when favorited', () => {
    expect(_component.find('ActionFavorite').hasClass('leafletPageFav')).to.be.false
    expect(_component.find('ActionFavorite').hasClass('leafletPageFavFiller')).to.be.true
    const favComponent = shallow(<LeafletPage title={props.title} isFavorited={t} isSelected={props.isSelected} />)
    expect(favComponent.find('ActionFavorite').hasClass('leafletPageFav')).to.be.true
  })

  it('Should only bold when isSelected', () => {
    expect(_component.find('.leafletPageTitleSelected')).to.not.exist
    const favComponent = shallow(<LeafletPage title={props.title} isFavorited={props.isFavorited} isSelected={t} />)
    expect(favComponent.find('.leafletPageTitleSelected')).to.exist
  })
})