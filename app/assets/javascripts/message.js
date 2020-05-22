$(function(){
    function buildHTML(message){
      if (message.image) {
        var html =
          `<div class="message">
            <div class="main-list">
              <div class="main-list__name">
                ${message.user_name}
              </div>
              <div class="main-list__date">
                ${message.created_at}
              </div>
            </div>
            <div class="main-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
        `<div class="message">
            <div class="main-list">
              <div class="main-list__name">
                ${message.user_name}
              </div>
              <div class="main-list__date">
                ${message.created_at}
              </div>
            </div>
            <div class="main-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      };
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(message){
        var html = buildHTML(message);
        $('.chat-main__message-list').append(html);
        $('form')[0].reset();
        $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
        $('.form-content__send').attr('disabled', false);
      })
      .fail(function(){
        alert('error');
      })
  });
});