import * as Dialog from "@radix-ui/react-dialog";
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-[rgba(0,0,0,0.75)]" />
      <Dialog.Content
       className="fixed min-w-[32rem] rounded-md py-10 px- bg-gray-800">
        <Dialog.Close>oi</Dialog.Close>
        <Dialog.Title>NOva transação</Dialog.Title>
        <Dialog.Content>
          <p>teste</p>
        </Dialog.Content>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
