package com.lti.repository;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.entity.Question;
import com.lti.entity.Subject;

@Repository
@Transactional
public class SubjectRepoImpl extends GenericRepoImpl implements SubjectRepo {

	@Override
	public Subject save(Subject subject) {
		Subject modifiedSubject = entityManager.merge(subject);
		return modifiedSubject;
	}

	@Override
	public boolean isSubjectPresent(String name) {
		return (Long) entityManager.createQuery("select count(s.id) from Subject s where s.name = :name")
				.setParameter("name", name).getSingleResult() == 1 ? true : false;
	}

	@Override
	public List<Subject> fetchAll() {
		String jpql = "select s from Subject s";
		List list = entityManager.createQuery(jpql).getResultList();
		return list;
	}

}
