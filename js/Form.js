$(function(){
    $('.btn').on('click', function (){
        name = $('#name').val();
        number = $('#number').val();

        $('#t-body').append(`
        <tr>
            <td>`+number+`</td>
            <td>`+name+`</td>
        </tr>
        `)

    })
})