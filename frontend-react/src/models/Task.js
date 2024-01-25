export default class Task {
   constructor(id, description, status, openTask, closeTask){
      this.id = id;
      this.description = description;
      this.status = status;
      this.openTask = openTask;
      this.closeTask = closeTask;
   }
}
