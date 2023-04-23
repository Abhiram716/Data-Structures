class Node {
  int data;
  Node next;
}

class linkedList {
  Node head;

  public void Insert(int data) {
    Node node = new Node();
    node.data = data;

    if (head == null) {
      head = node;
    } else {
      Node n = head;
      while (n.next != null) {
        n = n.next;
      }
      n.next = node;
    }
  }
  
  public void show() {
    Node node = head;
    while(node.next!= null){
      System.out.println(node.data);
      node = node.next;
    }
  }

}