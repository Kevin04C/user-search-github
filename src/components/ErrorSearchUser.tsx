interface Props {
  textError: null | string;
}

export const ErrorSearchUser = ({ textError }: Props) => {
  return (
    <aside className="user">
      <div className="user-content">
        <p className="user-error">{textError}</p>
      </div>
    </aside>
  );
};
