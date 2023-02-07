<script setup>
import CommandView from '.vitepress/components/CommandView.vue'
</script>
# Command List


## Usage dictates how you should use the command in chat. Basic usage explained!
```ts
-> $  
(This is our command delimiter -> Tells the bot we would like to use a command.)
```
```ts
-> $COMMANDNAME  
(using the delimiter we access a command name.)
```
```ts
-> <b>$COMMANDNAME</b> OPTIONALEXTRA 
(Optional Extra could be a String(username), a Number(69) etc, 
If the command needs more information than just the command name.)
```
---

<CommandView />

