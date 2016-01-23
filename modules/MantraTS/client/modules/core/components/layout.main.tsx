import React from 'react';
import Navigations from './navigations';

interface ILayoutProps {
  content: Function
}


// class Layout extends React.Component<{}, {}> {
//   render() {
//     return (
//       <div className="new-post">
//
//       </div>
//     );
//   }
// }

//
// class Layout extends React.Component<ILayoutProps, {}> {
//   render() {
//       return (
//         <div>
//           <header>
//           <h1>Mantra Voice</h1>
//           <Navigations />
//           </header>
//
//           <div>
//             { this.props.content() }
//           </div>
//
//           <footer>
//           <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</small>
//           </footer>
//         </div>
//       )
//   }
// }

const Layout = ({ content = (): void => null }) => (
  <div>
    <header>
    <h1>Mantra Voice</h1>
    <Navigations />
    </header>

    <div>
      { content() }
    </div>

    <footer>
    <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</small>
    </footer>
  </div>
);

export default Layout;

// <header>
// <h1>Mantra Voice</h1>
// <Navigations />
// </header>
//
// <div>
// {/* this.props.content() */}
// </div>
//
// <footer>
// <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.</small>
// </footer>
