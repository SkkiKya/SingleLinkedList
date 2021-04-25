class Node
{
  constructor(data, next)
  {
    this.data = data;
    this.next = next;
  }

  getData()
  {
    return this.data;
  }
}

class LinkedList
{
  // これで全てのリンクを取得しておく
  init()
  {
    // ヘッドノードと呼ばれる最初のノード
    this.head = new Node("San Francisco", null);

    var nodeOkaland = new Node("Okaland", null);
    this.head.next = nodeOkaland;

    var nodeBerkeley = new Node("berkeley", null);
    nodeOkaland.next = nodeBerkeley;

    // 末尾ノードと呼ばれる最後のノード
    this.tail = new Node("Fremont", null);
    nodeBerkeley.next = this.tail;

    return this.head;
  }

  // 表示メソッド(全件表示)
  print(node)
  {
    var p = node;
    while (p != null) //最初から最後まで
    {
      var data = p.getData();
      document.write(data + "->");
      p = p.next;
    }
    document.write("END</br></br>");
  }
}
