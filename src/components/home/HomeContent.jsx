import { HomePostsSlider, HomeDescription, HomeNewProducts, HomeFAB } from '.'
import { CustomDivider } from '../common'

const HomeContent = () => {
  return (
    <>
      {' '}
      <HomeDescription />
      <CustomDivider label="محصولات جدید ما" />
      <HomeNewProducts />
      <CustomDivider label="مجله فروشگاه من" />
      <HomePostsSlider />
      <HomeFAB />
    </>
  )
}
export default HomeContent
