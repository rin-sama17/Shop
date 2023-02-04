import HomeMagazineSlider from './HomeMagazineSlider'
import HomeDescription from './HomeDescription'
import HomeNewProducts from './HomeNewProducts'
import { CustomDivider } from '../common'

const HomeContent = () => {
  return (
    <>
      <HomeDescription />

      <CustomDivider label="محصولات جدید ما" />

      <HomeNewProducts />

      <CustomDivider label="مجله فروشگاه من" />

      <HomeMagazineSlider />
    </>
  )
}
export default HomeContent