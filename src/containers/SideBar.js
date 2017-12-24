// import React, { Component } from 'react'
// import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { withRouter} from 'react-router'
//
// class SideBar extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div>
//         <Sidebar.Pushable as={Segment}>
//           <Sidebar as={Menu} animation='push' width='thin' visible={this.state.sidebar.toggleVisibility} icon='labeled' vertical inverted>
//             <Menu.Item>
//               <Icon name='home' />
//               <Link to="/">
//                 Main
//               </Link>
//             </Menu.Item>
//             <Menu.Item name='gamepad'>
//               <Icon name='gamepad' />
//               Games
//             </Menu.Item>
//             <Menu.Item name='camera'>
//               <Icon name='camera' />
//               Channels
//             </Menu.Item>
//           </Sidebar>
//           <Sidebar.Pusher>
//             <Segment>
//               <Header as='h3'>Application Content</Header>
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     sidebar: state.sidebar
//   }
// }
//
// export default connect(mapStateToProps)(Sidebar);
