import Message from "../../models/Message";

// Actions types:
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const messagesInitState = [
    new Message(1, "T1", "D1", require("../../../assets/mosh.jpg")),
    new Message(
        2,
        "T2",
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie magna vel interdum congue. Nunc dolor arcu, porta sed ante eu, laoreet semper leo. Nulla luctus tristique erat, eget eleifend nibh vestibulum nec. Duis efficitur mollis dignissim. Duis lacinia arcu id augue pharetra, quis semper dolor lobortis. Duis euismod erat at sapien mattis pretium. Pellentesque suscipit laoreet iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla hendrerit urna sit amet purus pulvinar dictum. Nulla facilisi. Nulla facilisi. Integer malesuada convallis lorem vitae suscipit. Donec volutpat arcu sit amet finibus venenatis. Proin quis eros eget arcu mattis ullamcorper ac vel odio. Suspendisse ac leo ac urna sodales tincidunt sit amet vel mauris. Aenean est risus, scelerisque sed tempor vel, varius in dui.

Ut tincidunt nisl sed vestibulum pharetra. Maecenas at erat malesuada mauris porttitor lacinia. Fusce orci tortor, dapibus vitae nunc ac, sollicitudin congue diam. Maecenas id quam bibendum purus suscipit tristique. Proin et volutpat sem, nec mattis ante. Aenean blandit porttitor dolor aliquam venenatis. Integer eros nisi, rhoncus ornare tellus in, ultrices tempor dui.

Aenean sed ligula ac lectus semper tristique ac non ante. Donec sagittis pulvinar sapien, a convallis metus rutrum vel. Nam ut felis venenatis, malesuada lectus congue, commodo mi. Maecenas vel metus tellus. Mauris posuere id lacus non dictum. Ut congue erat sit amet neque mattis ultrices. Ut molestie rhoncus ante vel tincidunt. Curabitur finibus metus non dolor hendrerit volutpat. Vivamus quis magna ac est dignissim suscipit id non nisi.

Sed facilisis lectus libero, non facilisis arcu hendrerit non. Duis mollis hendrerit feugiat. Morbi cursus aliquam tincidunt. Nullam eget rutrum mauris, sed congue enim. Fusce viverra pretium urna, in efficitur lectus aliquet a. Praesent faucibus vitae dolor consectetur interdum. Proin mollis nunc et facilisis lacinia.

Nam nec ante congue, pellentesque justo eget, mollis urna. Duis molestie dolor ex, sed laoreet augue euismod quis. Sed egestas nibh eu tortor iaculis, ut vestibulum erat maximus. Praesent pharetra turpis a turpis viverra gravida. Mauris feugiat pretium nisl interdum vehicula. Integer efficitur vulputate pretium. Phasellus congue consequat quam, nec scelerisque tortor varius efficitur. Sed est nulla, consectetur at volutpat sit amet, maximus non ipsum. Donec quis blandit elit. Integer elementum lectus tortor, vehicula varius libero imperdiet eu. Nam a pharetra nibh. Donec in tellus lacinia, maximus nisl in, consequat mauris. Mauris mauris quam, blandit et lacinia non, mollis accumsan arcu. Duis accumsan vehicula felis ac imperdiet.

Nulla tincidunt, turpis id pharetra cursus, ligula eros maximus erat, vitae accumsan mauris purus a tortor. Nam venenatis nunc eget mauris maximus, ac elementum purus rutrum. Ut luctus metus non placerat viverra. Praesent ac ligula mauris. Duis lobortis eros erat, id volutpat augue vulputate sed. Nam a dolor nec purus aliquam commodo eget id ligula. Nulla sit amet est rutrum tellus imperdiet congue non vel est. Praesent eget quam iaculis, tempor purus eget, semper odio. Vestibulum at faucibus sem.

Etiam lacus lectus, semper vitae enim et, fringilla vulputate elit. Curabitur egestas sagittis tempor. Fusce erat nibh, dictum sit amet ipsum eget, auctor volutpat ex. Phasellus eget aliquet nisi. In consequat ipsum velit, in molestie diam scelerisque et. Vestibulum vitae erat quis velit aliquam ultrices non eu nisl. Nulla dui est, euismod ut suscipit vitae, volutpat vitae velit. Curabitur malesuada at ipsum in laoreet. Mauris tempus quis risus sed tincidunt. Phasellus lacinia ex eu lectus euismod feugiat. Sed a est ut massa fermentum lacinia. Integer bibendum congue nulla.

Suspendisse turpis odio, congue vitae est ut, aliquet vehicula orci. Sed ac nunc nec magna ultricies pharetra. Ut quis aliquam ex, vitae congue nulla. Praesent et mi quis tellus molestie placerat. Curabitur ullamcorper in orci ut tempor. Mauris tempor odio a mollis molestie. Phasellus tempus porta diam id aliquet. Vivamus hendrerit ligula odio, eget tincidunt est consectetur eu.

Aenean non neque viverra, ultrices dolor nec, gravida mauris. Nam posuere enim eget ante luctus accumsan. Maecenas blandit consectetur vestibulum. Nulla faucibus vestibulum cursus. Etiam mollis orci dolor, quis iaculis mi consequat sed. Proin vel magna augue. Vivamus vestibulum ut leo sit amet posuere. Duis molestie diam purus, et pharetra lectus dapibus non. Integer scelerisque urna vitae lectus scelerisque, non rhoncus ante porttitor. Maecenas non risus est. Suspendisse sed tortor ac lorem vulputate laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae commodo enim, sit amet convallis turpis. Nulla quis diam finibus, sagittis massa id, blandit lacus.

Nullam facilisis fermentum ultricies. Cras arcu purus, porttitor at ligula at, feugiat eleifend nulla. Ut viverra nisi eget libero ultricies hendrerit. Integer mattis mattis ipsum, dictum placerat felis dictum sit amet. Aliquam erat volutpat. Phasellus a placerat turpis. In auctor fermentum erat, eu pellentesque dui ornare vitae. Nullam ac diam eget turpis consectetur vulputate. Nullam mattis condimentum nibh, sit amet imperdiet metus tincidunt eget. Donec vitae tincidunt augue. Maecenas ac neque ut lectus placerat aliquet at et neque.

Etiam dapibus diam leo, ut tempus ipsum placerat ut. Nullam bibendum, sapien non volutpat iaculis, lectus magna scelerisque nibh, ut molestie ligula orci quis lectus. Ut scelerisque eros sit amet sem ultricies, nec vestibulum est fermentum. Morbi iaculis velit sit amet odio sagittis, et mollis lacus placerat. Morbi volutpat commodo nisl nec suscipit. Cras diam mauris, rhoncus tincidunt ante in, porta interdum arcu. Nulla non nisl dui. Aliquam non nisl libero. Vestibulum ornare vel nibh sed consequat. Quisque id purus sed elit aliquam tincidunt. Nam eu est feugiat, rhoncus libero non, consequat justo. Vivamus urna est, facilisis eget lorem non, convallis laoreet justo. Nunc posuere laoreet turpis, a venenatis metus porttitor sit amet. Proin a libero ut mi pharetra sagittis eu luctus lacus. Integer porta ex magna, at congue velit facilisis eget.

Duis elementum mauris vel orci accumsan rhoncus. Nullam semper eros eget euismod elementum. Cras iaculis malesuada nibh. Quisque porta accumsan sollicitudin. Vestibulum dignissim scelerisque turpis, ut ultrices ligula pharetra in. Nunc sapien elit, vulputate a risus sed, accumsan consequat diam. Nullam feugiat at felis a mollis. In hac habitasse platea dictumst. Quisque ac interdum urna. Quisque eget mi turpis. Donec in tortor ac.`,
        require("../../../assets/mosh.jpg")
    ),
];

export const messagesReducer = (state, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
            return state.filter((message) => message.id !== action.payload);
        default:
            return state;
    }
};
