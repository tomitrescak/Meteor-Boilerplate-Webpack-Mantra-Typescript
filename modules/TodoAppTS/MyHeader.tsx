import React from "react";
//import { CourseMenu, AdminMenu, CommunityMenu, LibraryMenu } from "../application/menus";
//import BlazeTemplate from "../shared/blaze_template";
//import { RouterUtils } from "../shared/helpers_client";


export default class TodoHeader extends React.Component<{}, {}> {
  render() {
    return <div style={{color: "white"}}>12359ee</div>;
  }
}

// let Header = React.createClass({
//   mixins: [ReactMeteorData],
//
//   getMeteorData() {
//     return {
//       currentUser: Meteor.user()
//     };
//   },
//
//   render() {
//     return (
//       <div className="ui inverted blue menu topMenu">
//         <a className="header item" href="/"><i className="icon bug"></i>{mf("site.name")}</a>
//         <a className="item" href="/book"><i className="icon book"></i> Book</a>
//           <div className="right menu">
//             { Roles.userIsInRole(Meteor.userId(), "admin") ? <AdminMenu /> : ""}
//             <CourseMenu />
//             <CommunityMenu />
//             <LibraryMenu />
//             {/* Meteor.user() ? <BlazeTemplate template={Template["userView"]} /> : "" */}
//           </div>
//       </div>
//     );
//   }
// });

// export default Header;
