import {
  HomePostsSlider,
  HomeDescription,
  HomeNewProducts,
  HomeFAB,
  HomeContract,
  HomeCategorys,
} from '.'
import { CustomDivider } from '../common'

const HomeContent = () => {
  return (
    <>
      <HomeDescription />
      <HomeNewProducts />
      {/* <HomeContract /> */}
      <HomeCategorys />
      <HomePostsSlider />
      <HomeFAB />
    </>
  )
}
export default HomeContent
