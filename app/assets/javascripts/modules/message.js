$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = 
        `<div class="message-box" data-message-id=${message.id}>
          <div class="message-Info">
            <div class="message-name">
              ${message.user_name}
            </div>
            <div class="datetime">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message-box" data-message-id=${message.id}>
        <div class="message-Info">
          <div class="message__name">
            ${message.user_name}
          </div>
          <div class="datetime">
            ${message.created_at}
          </div>
        </div>
        <div class="message__text">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messagefield').append(html);
      $('.messagefield').animate({scrollTop: $('.messagefield')[0].scrollHeight});
      $('form')[0].reset();
      $('.text-submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  });
});