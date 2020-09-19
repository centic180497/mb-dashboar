// import React, { Component } from 'react'
// import DashboardLayout from 'components/dashboard_layout/dashboard_layout';
// import SitemapPage from 'components/sitemap_page/sitemap_page'
// export default class Dashboard extends Component {
//   render() {
//     return (
//       <div>
//           <DashboardLayout title="BẢN ĐỒ CAMERA">
//               <SitemapPage/>
//           </DashboardLayout>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
import DashboardLayout from 'components/dashboard_layout/dashboard_layout'
import LoggedInRoute from 'components/logged_in_route'
// import SiteViolation from 'components/siteviolation_page'
import SitemapPage from 'components/sitemap_page'

export default class Dashboard extends Component {
  render() {
    
    const { url } = this.props.match
    return (
      <div>
        <LoggedInRoute path={`${url}/sitemap`}>
          <DashboardLayout title="BẢN ĐỒ CAMERA"> 
            <SitemapPage />
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${url}/followed_list`}>
          <DashboardLayout title="DANH SÁCH THEO DÕI">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${url}/search_vehicles`}>
          <DashboardLayout title="TÌM KIẾM PHƯƠNG TIỆN">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${url}/blacklist`}>
          <DashboardLayout title="DANH SÁCH ĐEN">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${url}/violations`}>
          <DashboardLayout title="VI PHẠM">
            {/* <SiteViolation /> */}
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${url}/record_videos`}>
          <DashboardLayout title="XEM LẠI">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${url}/flow`}>
          <DashboardLayout title="LƯU LƯỢNG">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
      </div>
    )
  }
}