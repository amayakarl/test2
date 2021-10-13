function Alert(opt){
    $('body').append(
`
<div class="alert alert-${opt.status?'success':'danger'} alert-dismissible fade show" role="alert">
  ${opt.message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

    )
}