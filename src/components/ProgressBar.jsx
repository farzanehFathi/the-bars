export default function ProgressBar(props) {
  
  return (
    <div style={"height: 100%, width:100%, backgroundcolor:whitesmoke"}>
      <div style={"height:100%, width:" + {props.progress}}>
        <span>.</span>
      </div>
    </div>
  );
}
