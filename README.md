# Task-CRUD

A CRUD application for managing tasks

This is a full-stack CRUD application that allows users to create, read, update, and delete tasks. The application is built using a modern JavaScript framework and a relational database.

Features:

Create, read, update, and delete tasks
Set the frequency of recurring tasks
Track progress of tasks
Manage task status

Tarefa{
  id: O ID da tarefa. Este campo é auto-incrementável.
  
  title: O título da tarefa.
  
  description: Uma descrição da tarefa. Com a duração que ela leva. Ex:"Ler livro 30-40 min."

  days: Os dias da semana em que a tarefa deve ser executada.
  
  quantity: A quantidade de vezes que a tarefa deve ser executada na semana.
  
  total: A quantidade total de vezes que a tarefa deve ser executada.(talvez em porcetagem %)
  
  hour: O horário da tarefa.
  
  status: O status da tarefa (em andamento, concluída, atrasada, etc.). (talvez em porcentagem %)
}
