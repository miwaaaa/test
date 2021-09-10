import { format } from 'date-fns';

export function dateToString(date){
    if (!date) {return ''; }
    return format(date, 'yyyy年M月d日 hh時mm分');
}

export function translateErrors(code) {
    const error = { title: 'エラー', description: '時間をおいてお試し下さい'};
    switch (code) {
        case 'auth/invalid-email':
            ErrorEvent.description= 'メールアドレスが不正です。';
            break;
        case 'auth/user-disabled':
            ErrorEvent.description= 'アカウントが無効です。';
            break;
        case 'auth/user-not-found':
                ErrorEvent.description= 'ユーザが見つかりませんでした。';
                break;
        case 'auth/wrong-password':
            ErrorEvent.description= 'パスワードが間違っています。';
            break;
        case 'auth/email-already-in-use':
            ErrorEvent.description= 'メールアドレスが使用されています';
            break;
        case 'auth/operation-not-allowed':
            ErrorEvent.description= '開発者にお問い合わせ下さい。';
            break;
        case 'auth/weak-password':
                ErrorEvent.description= 'パスワードが簡単すぎます。';
                break;
        default:
    }
    return error;
}
