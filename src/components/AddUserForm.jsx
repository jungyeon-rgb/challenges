import { useState } from 'react';
import useUserStore from '../store/userStore';

const AddUserForm = () => {
  const { users, addUser } = useUserStore();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    nickname: '',
    gender: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    if (!value) return '';
    switch (name) {
      case 'username':
      case 'nickname':
        return /^[가-힣a-zA-Z\s\d]{3,15}$/.test(value) ? '' : `${name}은 3~15자 이내로, 문자, 숫자 또는 공백만 포함할 수 있습니다.`;
      case 'email':
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? '' : '유효한 이메일 주소를 입력해주세요.';
      case 'gender':
        return value ? '' : '성별을 선택해주세요.';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const getBorderClass = (field) => {
    if (touched[field] && errors[field]) {
      return 'border-red-500';
    }
    return 'border-gray-300 focus:border-blue-500';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(newErrors).length === 0) {
      if (users.some(user => user.email === formData.email)) {
        setErrors(prev => ({ ...prev, email: '이미 등록된 이메일이 존재합니다.' }));
        return;
      }
      addUser(formData);
      setFormData({ username: '', email: '', nickname: '', gender: '' });
      setTouched({});
      setErrors({});
    } else {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <label className='mb-1'>username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="사용자 이름"
          className={`border-2 p-2 rounded outline-none transition-all duration-300 ${getBorderClass('username')}`}
        />
        {touched.username && errors.username && <p className='text-red-500 mt-1'>{errors.username}</p>}
      </div>
      
      <div className='flex flex-col'>
        <label className='mb-1'>email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="이메일"
          className={`border-2 p-2 rounded outline-none transition-all duration-300 ${getBorderClass('email')}`}
        />
        {touched.email && errors.email && <p className='text-red-500 mt-1'>{errors.email}</p>}
      </div>
      
      <div className='flex flex-col'>
        <label className='mb-1'>nickname</label>
        <input
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="닉네임"
          className={`border-2 p-2 rounded outline-none transition-all duration-300 ${getBorderClass('nickname')}`}
        />
        {touched.nickname && errors.nickname && <p className='text-red-500 mt-1'>{errors.nickname}</p>}
      </div>

      <div className='flex flex-col'>
        <label className='mb-1'>gender</label>
        <select 
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`border-2 p-2 rounded outline-none transition-all duration-300 ${getBorderClass('gender')}`}
        >
          <option value="">Select</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
        {touched.gender && errors.gender && <p className='text-red-500 mt-1'>{errors.gender}</p>}
      </div>

      <button type="submit" className='mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700'>추가</button>
    </form>
  );
};

export default AddUserForm;