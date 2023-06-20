<script>
    export let targetId;
  </script>
  
  <h2>hello</h2>
  <a href={`#${targetId}`} class="skip-to-content">Skip to content</a>
  
  <style>
    .skip-to-content {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #333;
      color: #fff;
      padding: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s;
    }
  
    .skip-to-content:hover,
    .skip-to-content:focus {
      opacity: 1;
    }
  </style>
  