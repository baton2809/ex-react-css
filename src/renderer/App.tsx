import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Hello = () => {
  return (
    <div className="scroll_disabled">
      <PerfectScrollbar>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sapien purus. Pellentesque at lacus sed ante sodales pretium. Donec ex lacus, pellentesque a ultricies at, feugiat quis sapien. Integer sed est in tortor consequat fermentum nec a nisl. Duis nec odio fringilla ligula luctus imperdiet a quis erat. Praesent laoreet pharetra nibh, eu mattis mi congue a. Morbi eu odio rutrum, placerat nisl quis, aliquet mauris. Phasellus luctus congue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis iaculis facilisis lacus, vitae feugiat ipsum accumsan nec. Quisque cursus aliquet tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

          Praesent volutpat, neque at euismod semper, libero dolor egestas urna, ac faucibus tellus odio at tellus. Suspendisse sollicitudin urna eu purus rhoncus sagittis. Nullam vel auctor erat. Suspendisse volutpat nulla diam, sit amet finibus est sodales sed. Ut ut eleifend mi. Etiam tempor sapien ut lacus pellentesque malesuada. Curabitur blandit velit et nulla efficitur viverra. Sed in sapien et turpis bibendum aliquam in ut mi. Suspendisse potenti. Mauris consectetur ligula non efficitur rutrum. Duis ac convallis augue.

          Aenean pellentesque mattis quam et laoreet. Maecenas finibus felis et tortor aliquet, nec condimentum nunc lacinia. Fusce tincidunt erat neque, eu dapibus felis malesuada eu. Phasellus pretium sit amet massa sit amet mollis. Sed vitae enim lobortis, fringilla tellus quis, tempor lorem. Donec non placerat orci. Etiam at nunc consequat, volutpat arcu vel, auctor urna. Aenean venenatis, ligula in venenatis blandit, ante nibh ornare diam, a maximus ipsum lacus vestibulum magna. Donec interdum risus sit amet erat finibus venenatis. Aliquam non nisl tincidunt, tempor erat at, elementum mi. Morbi feugiat magna a libero vulputate, vitae consequat lorem pharetra. Vestibulum tristique pulvinar lacus, non venenatis arcu. Nullam ut est ac lacus porttitor finibus. Nunc tincidunt tellus at sem venenatis pulvinar. Sed ut neque ipsum. Cras ullamcorper ipsum ut magna vehicula elementum.

          Praesent et eleifend tortor, sed sagittis urna. Cras non aliquam lectus. Morbi ut elit in lectus luctus consequat quis at purus. Quisque vestibulum magna nec felis faucibus molestie. Suspendisse potenti. Quisque tincidunt, nunc sed fermentum elementum, nulla dui porta neque, vitae aliquet sem tellus vitae libero. Morbi eget vulputate diam. Sed at pulvinar nisl. In lacinia tempor lacus, at tristique leo volutpat non. Sed malesuada velit sed elit mattis venenatis. Vivamus commodo augue sit amet libero mollis laoreet. Suspendisse a velit erat. Maecenas id turpis feugiat, congue justo et, viverra tortor. Cras felis ex, ultricies vel tellus sit amet, eleifend porttitor felis. Aliquam massa massa, malesuada sit amet viverra consectetur, interdum sit amet sem. Curabitur efficitur dui purus, a varius ex vulputate rhoncus.

          Nunc at dolor sollicitudin, vestibulum ante sed, mattis ipsum. Quisque vitae auctor libero. Ut finibus non risus quis aliquet. Ut nec elit a arcu porttitor pretium eu quis dolor. Aliquam erat volutpat. Donec commodo justo in fringilla efficitur. Nunc congue neque at pellentesque maximus. Morbi nec justo id felis efficitur elementum ut a orci. Vivamus ultrices augue ut aliquam blandit. In feugiat ultricies lacinia. Morbi nec congue felis. Donec non eros dui. Vivamus vel erat ut nisi accumsan laoreet. In et massa eu justo faucibus tempor. Mauris tempor tellus quis nulla rhoncus, vitae volutpat ipsum feugiat.</h2>
      </PerfectScrollbar>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
