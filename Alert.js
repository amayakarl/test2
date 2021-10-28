function Alert(opt){
    $('body').append(
`
<div class="alert alert-${opt.status?'success':'danger'} alert-dismissible fade show" role="alert" style="
      position:fixed;
      top:0;
      right:0;
      width:80%;
">
  ${opt.message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

    )
}